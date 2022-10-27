#BLOG API
- Frontend
  - Get all posts
  - Get one post
  - Get all posts of a specific category
  - Get all posts of a specific user
  - Get all posts that I created user
  - Get all categories
  - Paginate posts
  - CRUD actions for posts, categories

```json
    { 
      "total": 68,
      "prev": "localhost:9000/api/v1/posts?start=51&limit=60",
      "next": "localhost:9000/api/v1/posts?start=61&limit=68",
      "data": [{
        "id": "1",
        "title": "Example Post",
        "content": "Lorem Ips",
        "createdBy": {
          "id":"18",
          "name":"Daniel",
          "email":"daniel@daniel.com"
        },
        "category": {
          "id":"2",
          "name":"Technology"
        }
      }]
    }
```
ROUTES
  /api/v1

  /users
    - /me
    - /me/posts
    - /me/posts/:id
    - /:id

  /categories
    - /:id
    - /:id/posts

  /posts
    - /:id