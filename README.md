# How To Run

#### Navigate to the root directory of the project.

## Prerequisites
#### Project root directory
```angular2html
npm install
npm run start
```

## Run json test API
### In a new terminal from project root directory
```angular2html
npx json-server --watch data/db.json --port 8000
```
This will run the json server on port 8000

JSON test data is located in the `data` folder.

Access data by going to `http://localhost:8000/blogs`

# db.json layout
```json
{
  "blogs": [
    {
      "id": 1,
      "title": "My first blog",
      "author": "John Doe",
      "body": "This is my first blog",
      "created_at": "2019-01-01T00:00:00.000Z",
      "updated_at": "2019-01-01T00:00:00.000Z"
    },
    {
      "id": 2,
      "title": "My second blog",
      "author": "John Doe",
      "body": "This is my second blog",
      "created_at": "2019-01-01T00:00:00.000Z",
      "updated_at": "2019-01-01T00:00:00.000Z"
    },
    {
      "id": 3,
      "title": "My third blog",
      "author": "John Doe",
      "body": "This is my third blog",
      "created_at": "2019-01-01T00:00:00.000Z",
      "updated_at": "2019-01-01T00:00:00.000Z"
    }
  ]
}
```
