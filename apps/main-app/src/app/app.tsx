import { UiLib } from '@my-org/ui-lib';

import { consoleLog } from 'helper';

export function App() {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            consoleLog('Hello from the helper function!');
          }}
        >
          Click Me!
        </button>
      </div>
      <UiLib />
    </div>
  );
}

export default App;
