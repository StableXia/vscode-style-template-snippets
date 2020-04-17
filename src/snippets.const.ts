/***
 * @Author:xiawen
 * @Date:2020-04-17 13:17:07
 * @LastModifiedBy:xiawen
 * @Last Modified time:2020-04-17 13:17:07
 */

export interface IfaSnippetItem {
  body: string
  description: string
}

export type IfaSnippet = Array<IfaSnippetItem>

export const LAYOUT_SNIPPET: IfaSnippet = [
  {
    body: 'df-layout',
    description: '变成flex容器',
  },
  {
    body: 'df-layout--inline',
    description: '变成行内flex容器',
  },
  {
    body: 'df-layout--column',
    description: '主轴为垂直方向，起点在上沿',
  },
  {
    body: 'df-layout--row',
    description: '主轴为水平方向，起点在左端',
  },
  {
    body: 'df-layout--center-items',
    description: '交叉轴的中点对齐',
  },
  {
    body: 'df-layout--start-items',
    description: '交叉轴的起点对齐',
  },
  {
    body: 'df-layout--center-justify',
    description: '项目在主轴居中',
  },
  {
    body: 'df-layout--between-jsutify',
    description: '项目在主轴两端对齐，项目之间的间隔都相等',
  },
  {
    body: 'df-layout--around-justify',
    description: '每个项目在主轴两侧的间隔相等。',
  },
  {
    body: 'df-layout--end-justify',
    description: '项目在主轴右对齐',
  },
  {
    body: 'df-layout--start-justify',
    description: '项目在主轴左对齐',
  },
  {
    body: 'df-layout--wrap',
    description: '项目换行',
  },
  {
    body: 'df-layout__flex',
    description: '项目沾满剩余空间',
  },
  {
    body: 'df-layout-row',
    description: '行间距16px',
  },
  {
    body: 'df-layout-row-small',
    description: '行间距8px',
  },
  {
    body: 'df-layout-row-large',
    description: '行间距32px',
  },
  {
    body: 'df-layout-col',
    description: '列间距16px',
  },
  {
    body: 'df-layout-col-small',
    description: '列间距8px',
  },
  {
    body: 'df-layout-col-large',
    description: '列间距32px',
  },
]

export const SHADOW_SNIPPET: IfaSnippet = [
  {
    body: 'df-shadow-1',
    description: '第一种阴影',
  },
  {
    body: 'df-shadow-2',
    description: '第二种阴影',
  },
  {
    body: 'df-shadow-3',
    description: '第三种阴影',
  },
]

export const FONT_SNIPPET: IfaSnippet = [
  {
    body: 'df-typo-display1',
    description: '字体1',
  },
  {
    body: 'df-typo-display2',
    description: '字体2',
  },
  {
    body: 'df-typo-display3',
    description: '字体3',
  },
  {
    body: 'df-typo-display4',
    description: '字体4',
  },
  {
    body: 'df-typo-display5',
    description: '字体4',
  },
  {
    body: 'df-typo-display6',
    description: '字体6',
  },
  {
    body: 'df-typo-headline',
    description: '内容提示',
  },
  {
    body: 'df-typo-title',
    description: '标题',
  },
  {
    body: 'df-typo-sub-title',
    description: '子标题',
  },
  {
    body: 'df-typo-body',
    description: '正文',
  },
]

export const SNIPPET_MAP = {
  all: [...LAYOUT_SNIPPET, ...SHADOW_SNIPPET, ...FONT_SNIPPET],
  layout: LAYOUT_SNIPPET,
  shadow: SHADOW_SNIPPET,
  font: FONT_SNIPPET,
}
