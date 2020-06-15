const colorMap = {
  blue: '#1F77B4',
  gray: '#7F7F7F',
  lightGray: 'rgba(0,0,0,0.5)',
  lightGrayOpacity: 'rgb(211, 211, 211, 0.1)',
  lightGrayBorder: 'rgb(211, 211, 211, 1)',
  orange: '#FF7F0E',
  lighterBlue: '#9edae5',
  red: '#D62728',
  purple: '#9467BD',
  lightPurple: '#c5b0d5',
  brown: '#8C564B',
  lightBrown: '#c49c94',
  skyblue: '#CFECF9',
  yellow: '#ffed6f',
  yellowGreen: '#BCBD22',
  teal: '#17BECF',
  lightYellow: '#dbdb8d',
  pink: '#f7b6d2',
  lightPink: '#ff9896',
  lightgreen: '#98df8a',
  peach: '#ffbb78',
  lightBlue: '#aec7e8',
};

export const COLORS = {
  roleNode: colorMap.lightBlue,
  userNode: colorMap.lightgreen,
  edge: colorMap.lightGrayOpacity,
  parentEdge: colorMap.purple,
  childEdge: colorMap.brown,
  childSelectedBackground: colorMap.lightBrown,
  parentSelectedBackground: colorMap.purple,
  childSelectedBorder: colorMap.peach,
  parentSelectedBorder: colorMap.peach,
  hover: colorMap.lightBrown,
  hoverBorder: colorMap.peach,
  highlight: colorMap.yellow,
  edgeHighlight: colorMap.brown,
  nodeShadow: colorMap.lightGray,
  nodeBorder: colorMap.lightGrayBorder,
};
export const ICONS = {
  FOLDER:                      { icon: 'fas fa-folder' },
  ACCOUNT:                     { icon: 'far fa-snowflake' },
  DATABASE:                    { icon: 'fas fa-database' },
  SCHEMA:                      { icon: 'fas fa-layer-group' },
  TABLE:                       { icon: 'fas fa-table' },
  VIEW:                        { icon: 'fas fa-table' },
  WAREHOUSE:                   { icon: 'fas fa-cogs' },
  PIPE:                        { icon: 'fas fa-file-upload' },
  STAGE:                       { icon: 'fas fa-archive' },
  'FILE FORMAT':               { icon: 'fas fa-file' },
  FUNCTION:                    { icon: 'fas fa-calculator' },
  TASK:                        { icon: 'far fa-clock' },
  STREAM:                      { icon: 'fas fa-stream' },
  INTEGRATION:                 { icon: 'fas fa-compress-arrows-alt' },
  SHARE:                       { icon: 'fas fa-share-alt' },
  'MATERIALIZED VIEW':         { icon: 'fas fa-table' },
  'RESOURCE MONITOR':          { icon: 'fas fa-search-dollar' },
  NOTIFICATION:                { icon: 'fas fa-exclamation-circle' },
  'MANAGED ACCOUNT':           { icon: 'fas fa-satellite' },
  'NOTIFICATION SUBSCRIPTION': { icon: 'fas fa-flag' },
  PROCEDURE:                   { icon: 'fas fa-play' },
  default:                     { icon: 'fas fa-folder' },
};
