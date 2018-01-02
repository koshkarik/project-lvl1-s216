#!/usr/bin/env node

import makeGame from '..';
import { calc, message } from '../games/calc';

makeGame(message, calc);
