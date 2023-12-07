import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface ICPTutorials {
  'aprovePublication' : ActorMethod<[bigint], Result>,
  'getAprovedPublication' : ActorMethod<[], Array<Publication>>,
  'getIncomingPublication' : ActorMethod<[], Array<Publication>>,
  'getMiId' : ActorMethod<[], [] | [bigint]>,
  'getMiUser' : ActorMethod<[], [] | [User]>,
  'getPubFromUser' : ActorMethod<[bigint], Array<Publication>>,
  'getUser' : ActorMethod<[Principal], [] | [User]>,
  'loadAvatar' : ActorMethod<
    [Uint8Array | number[]],
    [] | [Uint8Array | number[]]
  >,
  'publish' : ActorMethod<[Tutorial], PublishResult>,
  'rejectPublication' : ActorMethod<[bigint], Result>,
  'signUp' : ActorMethod<[string, string], SignUpResult>,
}
export interface Publication {
  'content' : Tutorial__1,
  'autor' : bigint,
  'date' : bigint,
}
export type PublishResult = { 'ok' : Publication } |
  { 'err' : string };
export type Result = { 'ok' : null } |
  { 'err' : string };
export type SignUpErrors = { 'InBlackList' : null } |
  { 'CallerAnnonymous' : null } |
  { 'IsAlreadyAMember' : null };
export type SignUpResult = { 'ok' : User } |
  { 'err' : SignUpErrors };
export interface Tutorial {
  'title' : string,
  'html' : string,
  'assets' : [] | [Array<Uint8Array | number[]>],
  'tags' : Array<string>,
}
export interface Tutorial__1 {
  'title' : string,
  'html' : string,
  'assets' : [] | [Array<Uint8Array | number[]>],
  'tags' : Array<string>,
}
export interface User {
  'sex' : string,
  'country' : [] | [string],
  'birthdate' : [] | [bigint],
  'admissionDate' : bigint,
  'name' : string,
  'avatar' : [] | [Uint8Array | number[]],
}
export interface _SERVICE extends ICPTutorials {}
