import m from 'mithril';

// Source: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

export default {
  title: 'Example/Flexbox',
};

enum FlexDisplay {
  'flex' = 'flex',
  'inline-flex' = 'inline-flex',
}

enum FlexDirection {
  'row' = 'row',
  'row-reverse' = 'row-reverse',
  'column' = 'column',
  'column-reverse' = 'column-reverse',
}

enum FlexWrap {
  'nowrap' = 'nowrap',
  'wrap' = 'wrap',
  'wrap-reverse' = 'wrap-reverse',
}

enum JustifyContent {
  'flex-start' = 'flex-start',
  'flex-end' = 'flex-end',
  'center' = 'center',
  'space-between' = 'space-between',
  'space-around' = 'space-around',
  'space-evenly' = 'space-evenly',
  'start' = 'start',
  'end' = 'end',
  'left' = 'left',
  'right' = 'right',
  'safe' = 'safe',
  'unsafe' = 'unsafe',
}

enum AlignItems {
  'stretch' = 'stretch',
  'flex-start' = 'flex-start',
  'flex-end' = 'flex-end',
  'center' = 'center',
  'baseline' = 'baseline',
  'first baseline' = 'first baseline',
  'last baseline' = 'last baseline',
  'start' = 'start',
  'end' = 'end',
  'self-start' = 'self-start',
  'self-end' = 'self-end',
  'safe' = 'safe',
  'unsafe' = 'unsafe',
}

enum AlignContent {
  'flex-start' = 'flex-start',
  'flex-end' = 'flex-end',
  'center' = 'center',
  'space-between' = 'space-between',
  'space-around' = 'space-around',
  'space-evenly' = 'space-evenly',
  'stretch' = 'stretch',
  'start' = 'start',
  'end' = 'end',
  'baseline' = 'baseline',
  'first baseline' = 'first baseline',
  'last-baseline' = 'last-baseline',
  'safe' = 'safe',
  'unsafe' = 'unsafe',
}

enum AlignSelf {
  'auto' = 'auto',
  'flex-start' = 'flex-start',
  'flex-end' = 'flex-end',
  'center' = 'center',
  'baseline' = 'baseline',
  'stretch' = 'stretch',
}

interface Args {
  flexDisplay: FlexDisplay;
  flexDirection: FlexDirection;
  flexWrap: FlexWrap;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  alignContent: AlignContent;
  childMinHeight: number[];
  order: number[];
  flexGrow: number[];
  flexShrink: number[];
  flexBasis: string[];
  alignSelf: AlignSelf[];
}

export const flex = (args: Args): m.Component => {
  const childStyle = { border: 'red 4px solid' };

  return {
    view: () =>
      m(
        'div',
        {
          style: {
            display: args.flexDisplay,
            flexDirection: args.flexDirection,
            flexWrap: args.flexWrap,
            justifyContent: args.justifyContent,
            alignItems: args.alignItems,
            alignContent: args.alignContent,
            border: 'blue 4px solid',
          },
        },
        [
          m(
            'div',
            {
              style: {
                ...childStyle,
                order: args.order[0],
                flexGrow: args.flexGrow[0],
                flexShrink: args.flexShrink[0],
                flexBasis: args.flexBasis[0],
                alignSelf: args.alignSelf[0],
                minHeight: `${args.childMinHeight[0]}px`,
              },
            },
            'Col 1 - 25px',
          ),
          m(
            'div',
            {
              style: {
                ...childStyle,
                order: args.order[1],
                flexGrow: args.flexGrow[1],
                flexShrink: args.flexShrink[1],
                flexBasis: args.flexBasis[1],
                alignSelf: args.alignSelf[1],
                minHeight: `${args.childMinHeight[1]}px`,
              },
            },
            'Col 2 - 100px',
          ),
          m(
            'div',
            {
              style: {
                ...childStyle,
                order: args.order[2],
                flexGrow: args.flexGrow[2],
                flexShrink: args.flexShrink[2],
                flexBasis: args.flexBasis[2],
                alignSelf: args.alignSelf[2],
                minHeight: `${args.childMinHeight[2]}px`,
              },
            },
            'Col 3 - 75px',
          ),
        ],
      ),
  };
};

flex.args = {
  flexDisplay: FlexDisplay.flex,
  flexDirection: FlexDirection.row,
  flexWrap: FlexWrap.nowrap,
  justifyContent: JustifyContent['flex-start'],
  alignItems: AlignItems.stretch,
  alignContent: AlignContent['flex-start'],
  childMinHeight: [25, 100, 75],
  order: [0, 0, 0],
  flexGrow: [0, 0, 0],
  flexShrink: [1, 1, 1],
  flexBasis: ['auto', 'auto', 'auto'],
  alignSelf: [AlignSelf.auto, AlignSelf.auto, AlignSelf.auto],
};

flex.argTypes = {
  flexDisplay: {
    name: 'Display',
    control: { type: 'select', options: FlexDisplay },
  },
  flexDirection: {
    name: 'Direction',
    control: { type: 'select', options: FlexDirection },
  },
  flexWrap: {
    name: 'Wrap',
    control: { type: 'select', options: FlexWrap },
  },
  justifyContent: {
    name: 'Justify Content',
    control: { type: 'select', options: JustifyContent },
  },
  alignItems: {
    name: 'Align Items',
    control: { type: 'select', options: AlignItems },
  },
  alignContent: {
    name: 'Align Content',
    control: { type: 'select', options: AlignContent },
  },
  childMinHeight: {
    name: 'Child Minimum Height',
    control: { type: 'array', separator: ',' },
  },
  order: {
    name: 'Child Order',
    control: { type: 'array', separator: ',' },
  },
  flexGrow: {
    name: 'Child Flex Grow',
    control: { type: 'array', separator: ',' },
  },
  flexShrink: {
    name: 'Child Flex Shrink',
    control: { type: 'array', separator: ',' },
  },
  flexBasis: {
    name: 'Child Flex Basis',
    control: { type: 'array', separator: ',' },
  },
  alignSelf: {
    name: 'Child Align Self',
    control: { type: 'array', separator: ',' },
  },
};

export const flexTabs: m.ClosureComponent = () => ({
  view: () => (
    <div style='display: flex; border: 3px solid blue; justify-content: space-between;'>
      <div style='display: inline-flex; border: 3px solid red'>
        <div style=''>Content1</div>
        <div style=''>Content2</div>
      </div>
      <div style='display: inline-flex; border: 3px solid yellow'>
        <div style=''>Content3</div>
        <div style=''>Content4</div>
      </div>
      <div style='display: inline-flex; border: 3px solid brown'>
        <div style=''>Content3</div>
        <div style=''>Content4</div>
      </div>
    </div>
  ),
});
