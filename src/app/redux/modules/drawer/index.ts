import { IDrawerState, IToggleDrawerAction } from 'models/drawer';

/** Action Types */
export const TOGGLE: string = 'drawer/TOGGLE';
export const CLOSE: string = 'drawer/CLOSE';
export const OPEN: string = 'drawer/OPEN';
export const TOGGLE_DOCK: string = 'drawer/TOGGLEDOCK';
export const UNDOCK: string = 'drawer/UNDOCK';
export const DOCK: string = 'drawer/DOCK';

/** Counter: Initial State */
const initialState: IDrawerState = {
  isOpen: false,
  isDocked: false,
};

/** Reducer: CounterReducer */
export function drawerStateReducer(state = initialState, action?: IToggleDrawerAction) {
  switch (action.type) {
    case TOGGLE:
      return {
        isDocked: state.isDocked,
        isOpen: !state.isOpen,
      };

    case CLOSE:
      return {
        isDocked: state.isDocked,
        isOpen: false,
      };

    case OPEN:
      return {
        isDocked: state.isDocked,
        isOpen: true,
      };

    case TOGGLE_DOCK:
      return {
        isDocked: !state.isDocked,
        isOpen: state.isOpen,
      };

    case UNDOCK:
      return {
        isDocked: false,
        isOpen: state.isOpen,
      };

    case DOCK:
      return {
        isDocked: true,
        isOpen: state.isOpen,
      };

    default:
      return state;
  }
}

/** Action Creator: Increments the Counter */
export function toggle(): IToggleDrawerAction {
  return {
    type: TOGGLE,
  };
}

/** Action Creator: Decrements the Counter */
export function open(): IToggleDrawerAction {
  return {
    type: OPEN,
  };
}

/** Action Creator: Increments the Counter */
export function close(): IToggleDrawerAction {
  return {
    type: CLOSE,
  };
}

export function toggleDock(): IToggleDrawerAction {
  return {
    type: TOGGLE_DOCK,
  };
}

export function dock(): IToggleDrawerAction {
  return {
    type: DOCK,
  };
}

export function undock(): IToggleDrawerAction {
  return {
    type: UNDOCK,
  };
}
