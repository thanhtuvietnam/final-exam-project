export interface ApiMovieDetails {
  status: string;
  message: string;
  data: Data;
}

export interface Data {
  seoOnPage: SEOOnPage;
  breadCrumb: BreadCrumb[];
  params: Params;
  item: Item;
}

export interface BreadCrumb {
  name: string;
  slug?: string;
  position: number;
  isCurrent?: boolean;
}

export interface Item {
  tmdb: Tmdb;
  imdb: Imdb;
  created: Created;
  modified: Created;
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  content: string;
  type: string;
  status: string;
  thumb_url: string;
  poster_url: string;
  is_copyright: boolean;
  sub_docquyen: boolean;
  chieurap: boolean;
  trailer_url: string;
  time: string;
  episode_current: string;
  episode_total: string;
  quality: string;
  lang: string;
  notify: string;
  showtimes: string;
  year: number;
  view: number;
  actor: string[];
  director: string[];
  category: Category[];
  country: Category[];
  episodes: Episode[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Created {
  time: Date;
}

export interface Episode {
  server_name: string;
  server_data: ServerDatum[];
}

export interface ServerDatum {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}

export interface Imdb {
  id: string;
}

export interface Tmdb {
  type: string;
  id: string;
  season: null;
  vote_average: number;
  vote_count: number;
}

export interface Params {
  slug: string;
}

export interface SEOOnPage {
  og_type: string;
  titleHead: string;
  seoSchema: SEOSchema;
  descriptionHead: string;
  og_image: string[];
  updated_time: number;
  og_url: string;
}

export interface SEOSchema {
  '@context': string;
  '@type': string;
  name: string;
  dateModified: Date;
  dateCreated: Date;
  url: string;
  datePublished: Date;
  image: string;
  director: string;
}

// // Converts JSON strings to/from your types
// // and asserts the results of JSON.parse at runtime
// export class Convert {
//   public static toApiMovieDetails(json: string): ApiMovieDetails {
//     return cast(JSON.parse(json), r('ApiMovieDetails'));
//   }
//
//   public static apiMovieDetailsToJson(value: ApiMovieDetails): string {
//     return JSON.stringify(uncast(value, r('ApiMovieDetails')), null, 2);
//   }
// }
//
// function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
//   const prettyTyp = prettyTypeName(typ);
//   const parentText = parent ? ` on ${parent}` : '';
//   const keyText = key ? ` for key "${key}"` : '';
//   throw Error(
//     `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`,
//   );
// }
//
// function prettyTypeName(typ: any): string {
//   if (Array.isArray(typ)) {
//     if (typ.length === 2 && typ[0] === undefined) {
//       return `an optional ${prettyTypeName(typ[1])}`;
//     } else {
//       return `one of [${typ
//         .map((a) => {
//           return prettyTypeName(a);
//         })
//         .join(', ')}]`;
//     }
//   } else if (typeof typ === 'object' && typ.literal !== undefined) {
//     return typ.literal;
//   } else {
//     return typeof typ;
//   }
// }
//
// function jsonToJSProps(typ: any): any {
//   if (typ.jsonToJS === undefined) {
//     const map: any = {};
//     typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
//     typ.jsonToJS = map;
//   }
//   return typ.jsonToJS;
// }
//
// function jsToJSONProps(typ: any): any {
//   if (typ.jsToJSON === undefined) {
//     const map: any = {};
//     typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
//     typ.jsToJSON = map;
//   }
//   return typ.jsToJSON;
// }
//
// function transform(
//   val: any,
//   typ: any,
//   getProps: any,
//   key: any = '',
//   parent: any = '',
// ): any {
//   function transformPrimitive(typ: string, val: any): any {
//     if (typeof typ === typeof val) return val;
//     return invalidValue(typ, val, key, parent);
//   }
//
//   function transformUnion(typs: any[], val: any): any {
//     // val must validate against one typ in typs
//     const l = typs.length;
//     for (let i = 0; i < l; i++) {
//       const typ = typs[i];
//       try {
//         return transform(val, typ, getProps);
//       } catch (_) {
//         // Intentionally ignored
//       }
//     }
//     return invalidValue(typs, val, key, parent);
//   }
//
//   function transformEnum(cases: string[], val: any): any {
//     if (cases.indexOf(val) !== -1) return val;
//     return invalidValue(
//       cases.map((a) => {
//         return l(a);
//       }),
//       val,
//       key,
//       parent,
//     );
//   }
//
//   function transformArray(typ: any, val: any): any {
//     // val must be an array with no invalid elements
//     if (!Array.isArray(val)) return invalidValue(l('array'), val, key, parent);
//     return val.map((el) => transform(el, typ, getProps));
//   }
//
//   function transformDate(val: any): any {
//     if (val === null) {
//       return null;
//     }
//     const d = new Date(val);
//     if (isNaN(d.valueOf())) {
//       return invalidValue(l('Date'), val, key, parent);
//     }
//     return d;
//   }
//
//   function transformObject(
//     props: { [k: string]: any },
//     additional: any,
//     val: any,
//   ): any {
//     if (val === null || typeof val !== 'object' || Array.isArray(val)) {
//       return invalidValue(l(ref || 'object'), val, key, parent);
//     }
//     const result: any = {};
//     Object.getOwnPropertyNames(props).forEach((key) => {
//       const prop = props[key];
//       const v = Object.prototype.hasOwnProperty.call(val, key)
//         ? val[key]
//         : undefined;
//       result[prop.key] = transform(v, prop.typ, getProps, key, ref);
//     });
//     Object.getOwnPropertyNames(val).forEach((key) => {
//       if (!Object.prototype.hasOwnProperty.call(props, key)) {
//         result[key] = transform(val[key], additional, getProps, key, ref);
//       }
//     });
//     return result;
//   }
//
//   if (typ === 'any') return val;
//   if (typ === null) {
//     if (val === null) return val;
//     return invalidValue(typ, val, key, parent);
//   }
//   if (typ === false) return invalidValue(typ, val, key, parent);
//   let ref: any = undefined;
//   while (typeof typ === 'object' && typ.ref !== undefined) {
//     ref = typ.ref;
//     typ = typeMap[typ.ref];
//   }
//   if (Array.isArray(typ)) return transformEnum(typ, val);
//   if (typeof typ === 'object') {
//     return Object.prototype.hasOwnProperty.call(typ, 'unionMembers')
//       ? transformUnion(typ.unionMembers, val)
//       : Object.prototype.hasOwnProperty.call(typ, 'arrayItems')
//         ? transformArray(typ.arrayItems, val)
//         : Object.prototype.hasOwnProperty.call(typ, 'props')
//           ? transformObject(getProps(typ), typ.additional, val)
//           : invalidValue(typ, val, key, parent);
//   }
//   // Numbers can be parsed by Date but shouldn't be.
//   if (typ === Date && typeof val !== 'number') return transformDate(val);
//   return transformPrimitive(typ, val);
// }
//
// function cast<T>(val: any, typ: any): T {
//   return transform(val, typ, jsonToJSProps);
// }
//
// function uncast<T>(val: T, typ: any): any {
//   return transform(val, typ, jsToJSONProps);
// }
//
// function l(typ: any) {
//   return { literal: typ };
// }
//
// function a(typ: any) {
//   return { arrayItems: typ };
// }
//
// function u(...typs: any[]) {
//   return { unionMembers: typs };
// }
//
// function o(props: any[], additional: any) {
//   return { props, additional };
// }
//
// function m(additional: any) {
//   return { props: [], additional };
// }
//
// function r(name: string) {
//   return { ref: name };
// }
//
// const typeMap: any = {
//   ApiMovieDetails: o(
//     [
//       { json: 'status', js: 'status', typ: '' },
//       { json: 'message', js: 'message', typ: '' },
//       { json: 'data', js: 'data', typ: r('Data') },
//     ],
//     false,
//   ),
//   Data: o(
//     [
//       { json: 'seoOnPage', js: 'seoOnPage', typ: r('SEOOnPage') },
//       { json: 'breadCrumb', js: 'breadCrumb', typ: a(r('BreadCrumb')) },
//       { json: 'params', js: 'params', typ: r('Params') },
//       { json: 'item', js: 'item', typ: r('Item') },
//     ],
//     false,
//   ),
//   BreadCrumb: o(
//     [
//       { json: 'name', js: 'name', typ: '' },
//       { json: 'slug', js: 'slug', typ: u(undefined, '') },
//       { json: 'position', js: 'position', typ: 0 },
//       { json: 'isCurrent', js: 'isCurrent', typ: u(undefined, true) },
//     ],
//     false,
//   ),
//   Item: o(
//     [
//       { json: 'tmdb', js: 'tmdb', typ: r('Tmdb') },
//       { json: 'imdb', js: 'imdb', typ: r('Imdb') },
//       { json: 'created', js: 'created', typ: r('Created') },
//       { json: 'modified', js: 'modified', typ: r('Created') },
//       { json: '_id', js: '_id', typ: '' },
//       { json: 'name', js: 'name', typ: '' },
//       { json: 'slug', js: 'slug', typ: '' },
//       { json: 'origin_name', js: 'origin_name', typ: '' },
//       { json: 'content', js: 'content', typ: '' },
//       { json: 'type', js: 'type', typ: '' },
//       { json: 'status', js: 'status', typ: '' },
//       { json: 'thumb_url', js: 'thumb_url', typ: '' },
//       { json: 'poster_url', js: 'poster_url', typ: '' },
//       { json: 'is_copyright', js: 'is_copyright', typ: true },
//       { json: 'sub_docquyen', js: 'sub_docquyen', typ: true },
//       { json: 'chieurap', js: 'chieurap', typ: true },
//       { json: 'trailer_url', js: 'trailer_url', typ: '' },
//       { json: 'time', js: 'time', typ: '' },
//       { json: 'episode_current', js: 'episode_current', typ: '' },
//       { json: 'episode_total', js: 'episode_total', typ: '' },
//       { json: 'quality', js: 'quality', typ: '' },
//       { json: 'lang', js: 'lang', typ: '' },
//       { json: 'notify', js: 'notify', typ: '' },
//       { json: 'showtimes', js: 'showtimes', typ: '' },
//       { json: 'year', js: 'year', typ: 0 },
//       { json: 'view', js: 'view', typ: 0 },
//       { json: 'actor', js: 'actor', typ: a('') },
//       { json: 'director', js: 'director', typ: a('') },
//       { json: 'category', js: 'category', typ: a(r('Category')) },
//       { json: 'country', js: 'country', typ: a(r('Category')) },
//       { json: 'episodes', js: 'episodes', typ: a(r('Episode')) },
//     ],
//     false,
//   ),
//   Category: o(
//     [
//       { json: 'id', js: 'id', typ: '' },
//       { json: 'name', js: 'name', typ: '' },
//       { json: 'slug', js: 'slug', typ: '' },
//     ],
//     false,
//   ),
//   Created: o([{ json: 'time', js: 'time', typ: Date }], false),
//   Episode: o(
//     [
//       { json: 'server_name', js: 'server_name', typ: '' },
//       { json: 'server_data', js: 'server_data', typ: a(r('ServerDatum')) },
//     ],
//     false,
//   ),
//   ServerDatum: o(
//     [
//       { json: 'name', js: 'name', typ: '' },
//       { json: 'slug', js: 'slug', typ: '' },
//       { json: 'filename', js: 'filename', typ: '' },
//       { json: 'link_embed', js: 'link_embed', typ: '' },
//       { json: 'link_m3u8', js: 'link_m3u8', typ: '' },
//     ],
//     false,
//   ),
//   Imdb: o([{ json: 'id', js: 'id', typ: '' }], false),
//   Tmdb: o(
//     [
//       { json: 'type', js: 'type', typ: '' },
//       { json: 'id', js: 'id', typ: '' },
//       { json: 'season', js: 'season', typ: null },
//       { json: 'vote_average', js: 'vote_average', typ: 3.14 },
//       { json: 'vote_count', js: 'vote_count', typ: 0 },
//     ],
//     false,
//   ),
//   Params: o([{ json: 'slug', js: 'slug', typ: '' }], false),
//   SEOOnPage: o(
//     [
//       { json: 'og_type', js: 'og_type', typ: '' },
//       { json: 'titleHead', js: 'titleHead', typ: '' },
//       { json: 'seoSchema', js: 'seoSchema', typ: r('SEOSchema') },
//       { json: 'descriptionHead', js: 'descriptionHead', typ: '' },
//       { json: 'og_image', js: 'og_image', typ: a('') },
//       { json: 'updated_time', js: 'updated_time', typ: 0 },
//       { json: 'og_url', js: 'og_url', typ: '' },
//     ],
//     false,
//   ),
//   SEOSchema: o(
//     [
//       { json: '@context', js: '@context', typ: '' },
//       { json: '@type', js: '@type', typ: '' },
//       { json: 'name', js: 'name', typ: '' },
//       { json: 'dateModified', js: 'dateModified', typ: Date },
//       { json: 'dateCreated', js: 'dateCreated', typ: Date },
//       { json: 'url', js: 'url', typ: '' },
//       { json: 'datePublished', js: 'datePublished', typ: Date },
//       { json: 'image', js: 'image', typ: '' },
//       { json: 'director', js: 'director', typ: '' },
//     ],
//     false,
//   ),
// };
