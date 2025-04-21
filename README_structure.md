## src
* **app** - application layer 
    * **pages**         - application routes - pages
    * **app.jsx**       - main application component
    * **provider.jsx**  - application provider that wraps the entire application with different global providers
    * **router.jsx**    - application router configuration
* **assets**       - static files (images, fonts, icons, etc.)
* **components**   - shared reusable UI components 
* **config**       - global configurations, exported env variables etc.
* **features**     - feature based modules
    * **feature-1**
        * **api**           - exported API request declarations and api hooks related to a specific feature
        * **assets**        - assets folder can contain all the static files for a specific feature
        * **components**    - components scoped to a specific feature
        * **hooks**         - hooks scoped to a specific feature
        * **stores**        - state stores for a specific feature
        * **utils**         - utility functions for a specific feature
* **hooks**        - shared hooks used across the entire application
* **lib**          - reusable libraries preconfigured for the application
* **stores**       - global state stores
* **styles**       - global styles, variables, themes
* **testing**      - test utilities and mocks
* **utils**        - shared utility functions

