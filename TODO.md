Server side in Firebase:
    -   upload image on firebase or host it somewhere and add an 'URL' key in image object
    -   compare clicked coordinate with the ones stored in the database
    -   store picked image data in component's state
    -   structure: [
        {
            IMAGE_ID: xxx,
            URL: 'xxx',
            OBJECTS: [
                {
                    CHAR_NAME: 'xxx',
                    COORD_X: [12, 34],
                    COORD_Y: [62, 84],
                    DISPLAY: false
                },
                ...
            ]
        },
        ...
    ]