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
import { HumanDuration } from '@backstage/types';

export interface Config {
  /**
   * Configuration options for notifications-backend
   */
  notifications?: {
    /**
     * Concurrency limit for notification sending, defaults to 10
     */
    concurrencyLimit?: number;
    /**
     * Throttle duration between notification sending, defaults to 50ms
     */
    throttleInterval?: HumanDuration | string;
  };
}
