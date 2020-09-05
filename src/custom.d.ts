declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "juce-blueprint" {
  import React, { Component } from 'react';
  export { default as NativeMethods } from "lib/NativeMethods";
  export { default as EventBridge } from "lib/EventBridge";
  export function View(props: any): React.DOMElement<any, Element>;
  export namespace View {
    var ClickEventFlags: {
      disableClickEvents: number;
      allowClickEvents: number;
      allowClickEventsExcludingChildren: number;
      allowClickEventsOnlyOnChildren: number;
    };
    var EasingFunctions: {
      linear: number;
      quadraticIn: number;
      quadraticOut: number;
      quadraticInOut: number;
    };
  }
  export function Text(props: any): React.DOMElement<any, Element>;
  export namespace Text {
    var WordWrap: {
      none: number;
      byWord: number;
      byChar: number;
    };
    var FontStyleFlags: {
      plain: number;
      bold: number;
      italic: number;
      underlined: number;
    };
    var JustificationFlags: {
      left: number;
      right: number;
      horizontallyCentred: number;
      top: number;
      bottom: number;
      verticallyCentred: number;
      horizontallyJustified: number;
      centred: number;
      centredLeft: number;
      centredRight: number;
      centredTop: number;
      centredBottom: number;
      topLeft: number;
      topRight: number;
      bottomLeft: number;
      bottomRight: number;
    };
  }
  export function Image(props: any): React.DOMElement<any, Element>;
  export namespace Image {
    var PlacementFlags: {
      xLeft: number;
      xRight: number;
      xMid: number;
      yTop: number;
      yBottom: number;
      yMid: number;
      stretchToFit: number;
      fillDestination: number;
      onlyReduceInSize: number;
      onlyIncreaseInSize: number;
      doNotResize: number;
      centred: number;
    };
  }
  export function bindCanvasContextProperties(ctx: any): void;
  export interface CanvasProps {
    onMeasure?: (width: number, height: number) => void;
    onDraw: (ctx: CanvasRenderingContext2D) => void;
    autoclear?: boolean;
  }
  interface CanvasState {
    width: number;
    height: number;
  }
  export class Canvas extends Component<CanvasProps, CanvasState> {
    constructor(props: CanvasProps);
    _onMeasure(width: number, height: number): void;
    _onDraw(ctx: any): void;
    render(): React.DOMElement<Readonly<CanvasProps> & Readonly<{
      children?: React.ReactNode;
    }> & {
      onDraw: (ctx: any) => void;
      onMeasure: (width: number, height: number) => void;
    }, Element>;
  }
  function ScrollViewContentView(props: any): React.DOMElement<any, Element>;
  export function ScrollView(props: any): React.DOMElement<any, Element>;
  export namespace ScrollView {
    var ContentView: typeof ScrollViewContentView;
  }
  const _default: {
    getRootContainer(): any;
    render(element: any, container: any, callback?: (() => void) | undefined): any;
    enableMethodTrace(): void;
  };
  export default _default;
}
