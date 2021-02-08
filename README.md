## Setup
Initialize the project by running the following commands in the root of the project directory:

``` 
$ npm install
$ npm start
```

## Technologies
This project is currently setup with the following packages (only listing the most impactful ones):

* React
* Redux + Redux-Saga
* SCSS
* eslint (based on airbnb's config)



## Further work and comments
Due to the limited time invested in this project the following section details future improvements that could be made to the project:

* Hardcoded strings should be moved to a constants file, support for multiple languages could be implemented with the context-API.
* The project currently does not attempt to adhere to the WCAG standards. Universal design could be improved by creating options for improving contrasts, font-sizes and adding ARIA-markup among other things.
* Table could be improved by improving pagination, pre-rendering, adding filtering and sorting. Using an external package like ag-Grid could be beneficial.
* Error handling is not optimal and should be improved further. The ErrorPopUp component can't be closed without refreshing and doesn't actually "pop up" as it is rendered in the dashboard component.
* Redux is not required in this scenario but was implementet to showcase know-how.
* The design is in no way, shape or form mobile friendly. This could be improved by adding media queries in the scss or change the rendered components based on screen-size.