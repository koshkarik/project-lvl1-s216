#!/usr/bin/env node

import makeGame from '..';
import { oddEven, message } from '../games/evenOdd';

makeGame(message, oddEven);
