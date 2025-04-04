/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Command } from 'commander';
import { createCliPlugin } from '../../wiring/factory';
import { lazy } from '../../lib/lazy';
import { configOption } from '../config';

export const buildPlugin = createCliPlugin({
  pluginId: 'build',
  init: async reg => {
    reg.addCommand({
      path: ['package', 'start'],
      description: 'Start a package for local development',
      execute: async ({ args }) => {
        const command = new Command();

        const defaultCommand = command
          .option(...configOption)
          .option(
            '--role <name>',
            'Run the command with an explicit package role',
          )
          .option('--check', 'Enable type checking and linting if available')
          .option('--inspect [host]', 'Enable debugger in Node.js environments')
          .option(
            '--inspect-brk [host]',
            'Enable debugger in Node.js environments, breaking before code starts',
          )
          .option(
            '--require <path...>',
            'Add a --require argument to the node process',
          )
          .option(
            '--link <path>',
            'Link an external workspace for module resolution',
          )
          .action(lazy(() => import('./commands/package/start'), 'command'));

        await defaultCommand.parseAsync(args, { from: 'user' });
      },
    });

    reg.addCommand({
      path: ['repo', 'start'],
      description: 'Starts packages in the repo for local development',
      execute: async () => {
        throw new Error('Not implemented');
      },
    });
  },
});

export default buildPlugin;
