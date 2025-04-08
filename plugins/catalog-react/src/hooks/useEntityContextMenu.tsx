/*
 * Copyright 2025 The Backstage Authors
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
import React from 'react';
import {
  createVersionedContext,
  createVersionedValueMap,
  useVersionedContext,
} from '@backstage/version-bridge';

/** @public */
export type EntityContextMenuContextValue = {
  onMenuClose: () => void;
};

const EntityContextMenuContext = createVersionedContext<{
  1: EntityContextMenuContextValue;
}>('entity-context-menu-context');

/** @public */
export interface EntityContextMenuProviderProps {
  children: React.ReactNode;
  onMenuClose: () => void;
}

/** @public */
export const EntityContextMenuProvider = (
  props: EntityContextMenuProviderProps,
) => {
  const { children, onMenuClose } = props;
  const value = { onMenuClose };

  return (
    <EntityContextMenuContext.Provider
      value={createVersionedValueMap({ 1: value })}
    >
      {children}
    </EntityContextMenuContext.Provider>
  );
};

/** @public */
export function useEntityContextMenu() {
  const versionedHolder = useVersionedContext<{
    1: EntityContextMenuContextValue;
  }>('entity-context-menu-context');

  if (!versionedHolder) {
    throw new Error(
      'useEntityContextMenu must be used within an EntityContextMenuProvider',
    );
  }

  const value = versionedHolder.atVersion(1);
  if (!value) {
    throw new Error('EntityContextMenu v1 is not available');
  }

  return value;
}
