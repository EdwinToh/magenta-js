/**
 *
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const MIN_VRAM = 50; // used for memory check

export enum MODEL {
  VIOLIN = 'violin',
  TENOR_SAXOPHONE = 'tenor_saxophone',
  TRUMPET = 'trumpet',
  FLUTE = 'flute',
}

export const MODEL_URL =
  'https://storage.googleapis.com/magentadata/js/checkpoints/ddsp';

export const LOWEST_LD = -120;
export const CROSSFADE_DURATION = 1;
export const OUTPUT_SAMPLE_RATE = 48000;

export const PRESET_MODELS = [
  {
    averageMaxLoudness: -48.6,
    loudnessThreshold: -100.0,
    meanLoudness: -68.5,
    meanPitch: 62.0,
    postGain: 2,
    modelMaxFrameLength: 1250,
    checkpointUrl: `${MODEL_URL}/${MODEL.VIOLIN}/model.json`,
  },
  {
    averageMaxLoudness: -44.7,
    loudnessThreshold: -100.0,
    meanLoudness: -56,
    meanPitch: 58.9,
    postGain: 0.9,
    modelMaxFrameLength: 1250,
    checkpointUrl: `${MODEL_URL}/${MODEL.TENOR_SAXOPHONE}/model.json`,
  },
  {
    averageMaxLoudness: -61.7,
    loudnessThreshold: -100.0,
    meanLoudness: -72.5,
    meanPitch: 68.6,
    postGain: 1.5,
    modelMaxFrameLength: 1250,
    checkpointUrl: `${MODEL_URL}/${MODEL.TRUMPET}/model.json`,
  },
  {
    averageMaxLoudness: -45.9,
    loudnessThreshold: -100.0,
    meanLoudness: -70.6,
    meanPitch: 63.2,
    postGain: 4,
    modelMaxFrameLength: 1250,
    checkpointUrl: `${MODEL_URL}/${MODEL.FLUTE}/model.json`,
  },
];

//optimal value
export const LD_CONF_REDUCTION = -25.0;
export const CONF_SMOOTH_SIZE = 100;
export const PITCHES_HOP = 8192;
export const CONF_THRESHOLD = 0.7;
