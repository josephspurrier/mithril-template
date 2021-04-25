import { rest } from 'msw';
import { apiServer } from '@/helper/global';
import { AsyncResponseResolverReturnType, MockedResponse } from 'msw';
import { User as UserLogin, LoginResponse } from '@/page/login/loginstore';
import { RegisterResponse } from '@/page/register/registerstore';
import {
  Note,
  NoteListResponse,
  NoteUpdateRequest,
  NoteCreateRequest,
} from '@/page/notepad/notestore';
import { randId } from '@/helper/random';
import { GenericResponse } from '@/helper/response';

let notes = [] as Note[];

export const handlers = [
  // GET healthcheck.
  rest.get(apiServer() + '/api/v1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 'OK',
        message: 'ready',
      } as GenericResponse),
    );
  }),
  // POST login.
  rest.post(
    apiServer() + '/api/v1/login',
    (req, res, ctx): AsyncResponseResolverReturnType<MockedResponse> => {
      if (
        JSON.stringify(req.body) ===
        JSON.stringify({
          email: 'jsmith@example.com',
          password: 'password',
        } as UserLogin)
      ) {
        return res(
          ctx.status(200),
          ctx.json({
            status: 'OK',
            token: '1',
          } as LoginResponse),
        );
      } else {
        return res(
          ctx.status(400),
          ctx.json({
            status: 'Bad Request',
            message: 'Username and password does not match.',
          } as GenericResponse),
        );
      }
    },
  ),
  // POST register.
  rest.post(
    apiServer() + '/api/v1/register',
    (req, res, ctx): AsyncResponseResolverReturnType<MockedResponse> => {
      return res(
        ctx.status(201),
        ctx.json({
          status: 'Created',
          record_id: '1',
        } as RegisterResponse),
      );
    },
  ),
  // GET notes.
  rest.get(
    apiServer() + '/api/v1/note',
    (req, res, ctx): AsyncResponseResolverReturnType<MockedResponse> => {
      return res(
        ctx.status(200),
        ctx.json({
          notes: notes,
        } as NoteListResponse),
      );
    },
  ),
  // DELETE note.
  rest.delete(
    apiServer() + '/api/v1/note/:noteId',
    (req, res, ctx): AsyncResponseResolverReturnType<MockedResponse> => {
      const { noteId } = req.params;
      notes = notes.filter(function (v) {
        return v.id !== noteId;
      });
      return res(
        ctx.status(200),
        ctx.json({
          status: 'OK',
          message: 'Note deleted.',
        } as GenericResponse),
      );
    },
  ),
  // POST note.
  rest.post(
    apiServer() + '/api/v1/note',
    (req, res, ctx): AsyncResponseResolverReturnType<MockedResponse> => {
      const data = req.body as NoteCreateRequest;
      const id = randId();
      notes.push({ id: id, message: data.message });
      return res(
        ctx.status(201),
        ctx.json({
          status: 'OK',
          message: 'Note created.',
        } as GenericResponse),
      );
    },
  ),
  // PUT note.
  rest.put(
    apiServer() + '/api/v1/note/:noteId',
    (req, res, ctx): AsyncResponseResolverReturnType<MockedResponse> => {
      const { noteId } = req.params;
      const data = req.body as NoteUpdateRequest;
      for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === noteId) {
          notes[i].message = data.message;
          break;
        }
      }
      return res(
        ctx.status(200),
        ctx.json({
          status: 'OK',
          message: 'Note updated.',
        } as GenericResponse),
      );
    },
  ),
];
