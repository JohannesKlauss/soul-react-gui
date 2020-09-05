import "juce-blueprint/cjs/lib/polyfill";

import React from 'react';
import Blueprint from 'juce-blueprint';
import Patch from "./components/organism/Patch";

Blueprint.render(<Patch/>, Blueprint.getRootContainer());