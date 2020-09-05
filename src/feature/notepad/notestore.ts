import m from 'mithril';
import { showFlash, MessageType } from '@/component/flash/flash';
import { bearerToken } from '@/helper/cookiestore';
import { apiServer } from '@/helper/global';

export interface Note {
  id: string;
  message: string;
}

export interface NoteListResponse {
  notes: Note[];
}

export interface NoteCreateRequest {
  message: string;
}

export interface NoteUpdateRequest {
  message: string;
}

export interface ErrorResponse {
  message: string;
}

export const submit = (n: NoteCreateRequest): Promise<void> => {
  return create(n)
    .then(() => {
      showFlash('Note created.', MessageType.success);
    })
    .catch((err: XMLHttpRequest) => {
      const response = err.response as ErrorResponse;
      if (response) {
        showFlash(response.message, MessageType.warning);
      } else {
        showFlash('An error occurred.', MessageType.warning);
      }
      throw err;
    });
};

export const create = (body: NoteCreateRequest): Promise<void> => {
  return m.request({
    method: 'POST',
    url: apiServer() + '/api/v1/note',
    headers: {
      Authorization: bearerToken(),
    },
    body,
  });
};

export const load = (): Promise<Note[]> => {
  return m
    .request({
      method: 'GET',
      url: apiServer() + '/api/v1/note',
      headers: {
        Authorization: bearerToken(),
      },
    })
    .then((raw: unknown) => {
      const result = raw as NoteListResponse;
      if (result) {
        return result.notes;
      }
      showFlash('Data returned is not valid.', MessageType.failed);
      return [] as Note[];
    })
    .catch((err: XMLHttpRequest) => {
      const response = err.response as ErrorResponse;
      if (response) {
        showFlash(response.message, MessageType.warning);
      } else {
        showFlash('An error occurred.', MessageType.warning);
      }
      throw err;
    });
};

export const runUpdate = (id: string, value: string): void => {
  update(id, value).catch((err: XMLHttpRequest) => {
    const response = err.response as ErrorResponse;
    if (response) {
      showFlash(
        `Could not update note: ${response.message}`,
        MessageType.warning,
      );
    } else {
      showFlash('An error occurred.', MessageType.warning);
    }
  });
};

export const update = (id: string, text: string): Promise<void> => {
  return m.request({
    method: 'PUT',
    url: apiServer() + '/api/v1/note/' + id,
    headers: {
      Authorization: bearerToken(),
    },
    body: { message: text } as NoteUpdateRequest,
  });
};

export const runDelete = (id: string): Promise<void> => {
  return deleteNote(id)
    .then(() => {
      showFlash('Note deleted.', MessageType.success);
    })
    .catch((err: XMLHttpRequest) => {
      const response = err.response as ErrorResponse;
      if (response) {
        showFlash(
          `Could not delete note: ${response.message}`,
          MessageType.warning,
        );
      } else {
        showFlash('An error occurred.', MessageType.warning);
      }
    });
};

export const deleteNote = (id: string): Promise<void> => {
  return m.request({
    method: 'DELETE',
    url: apiServer() + '/api/v1/note/' + id,
    headers: {
      Authorization: bearerToken(),
    },
  });
};
