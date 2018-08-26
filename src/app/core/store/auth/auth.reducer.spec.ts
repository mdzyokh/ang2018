import { authReducer } from './auth.reducer';
import { initialAuthState } from './auth.state';


describe('Auth Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = authReducer(initialAuthState, action);

      expect(result).toBe(initialAuthState);
    });
  });
});