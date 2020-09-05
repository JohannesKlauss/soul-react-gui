interface ISoulManifest {
  readonly soulPatchV1: {
    readonly ID: string;
    readonly version: string;
    readonly name: string;
    readonly description: string;
    readonly category: string;
    readonly manufacturer: string;
    readonly isInstrument: boolean;
    readonly source: string;
    readonly view: string;
  }
}

interface IPatchDescription {
  readonly UID: string;
  readonly version: string;
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly manufacturer: string;
  readonly URL: string;
  readonly isInstrument: boolean;
}

interface IParameterState {
  readonly ID: string;
  readonly name: string;
  readonly value: number;
  readonly min: number;
  readonly max: number;
  readonly step: number;
  readonly init: number;
  readonly textValues: string[];
  readonly isBool: boolean;
}

interface IEndpointDetails {
  readonly ID: string;
  readonly name: string;
  readonly type: string;
  readonly valueTypes: number[];
  readonly annotation?: unknown;
}

interface IParameterValue {
  readonly value: number;
  readonly stringValue: string;
}

export type SoulManifest = ISoulManifest;
export type PatchDescription = IPatchDescription;
export type ParameterState = IParameterState;
export type EndpointDetails = IEndpointDetails;
export type ParameterValue = IParameterValue;

declare global {
  const getPatchDescription: () => PatchDescription;
  const getManifest: () => SoulManifest;
  const getAllParameterIDs: () => string[];
  const getInputEventEndpointIDs: () => string[];
  const getOutputEventEndpointIDs: () => string[];
  const getEndpointDetails: () => EndpointDetails;
  const beginParameterChangeGesture: (paramId: string) => void;
  const endParameterChangeGesture: (paramId: string) => void;
  const setParameterValue: (paramId: string, value: number) => void;
  const getParameterValue: (paramId: string) => undefined | ParameterValue;
  const getParameterState: () => undefined | ParameterState;
}