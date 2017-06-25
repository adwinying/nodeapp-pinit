# PinIt: NodeJS Pinterest Clone

### Frameworks / Technologies Used
- Express.js
- Node.js
- MongoDB + Mongoose
- Passport.js (Twitter strategy)
- ESLint (Airbnb)
- Vue.js
- Vuex
- Vue router/resource
- Vue-masonry

## Backend APIs

#### `GET /api/auth/login`
Login via Twitter OAuth.

#### `GET /api/auth/profile`
Returns current session's user profile.

```javascript
// Output (Success)
{
  "success": true,
  "user": {
    "_id": "noaein235oubw9tj",
    "displayName": "John Doe"
    "username": "john",
    "profileImageURL": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
  }
}

// Output (Fail)
{
  "success": false,
  "message": "Not logged in"
}
```

#### `GET /api/auth/logout`
Logs out from current session.
```javascript
// Output (Success)
{
  "success": true,
  "message": "Successfully logged out."
}

// Output (Fail)
{
  "success": false,
  "message": "Not logged in"
}
```

---

#### `GET /api/pin/all`
Return a list of all pins.

```javascript
// Output (Success)
{
  "success": true,
  "pins": [
    {
      "_id": "594e394e9845ff06719b93b2",
      "updated": "2017-06-24T10:07:15.760Z",
      "created": "2017-06-24T10:05:02.633Z",
      "title": "Another Pin",
      "owner": {
        "_id": "noaein235oubw9tj",
        "displayName": "John Doe"
        "username": "john",
        "profileImageURL": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
      },
      "imageURL": "https://media.giphy.com/media/vQYNur4KkSJB6/giphy.gif",
      "likeCount": 3,
      "likedBy": []
    },
    ...
  ]
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```

#### `GET /api/pin/user/:userId`
Return a list of all pins created by `userId`.

```javascript
// Output (Success)
{
  "success": true,
  "pins": [
    {
      "_id": "594e394e9845ff06719b93b2",
      "updated": "2017-06-24T10:07:15.760Z",
      "created": "2017-06-24T10:05:02.633Z",
      "title": "Another Pin",
      "owner": {
        "_id": "noaein235oubw9tj",
        "displayName": "John Doe"
        "username": "john",
        "profileImageURL": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
      },
      "imageURL": "https://media.giphy.com/media/vQYNur4KkSJB6/giphy.gif",
      "likeCount": 3,
      "likedBy": []
    },
    ...
  ]
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```

#### `POST /api/pin/new`
_**Authentication required**_
Creates a new pin.

```javascript
// Expected input
{
  "title": "My New Pin",
  "imageURL": "https://media.giphy.com/media/vQYNur4KkSJB6/giphy.gif",
}

// Output (Success)
{
  "success": true,
  "pin": {
    "_id": "594e394e9845ff06719b93b2",
    "updated": "2017-06-24T10:07:15.760Z",
    "created": "2017-06-24T10:05:02.633Z",
    "title": "My New Pin",
    "owner": {
      "_id": "noaein235oubw9tj",
      "displayName": "John Doe"
      "username": "john",
      "profileImageURL": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    },
    "imageURL": "https://media.giphy.com/media/vQYNur4KkSJB6/giphy.gif",
    "likeCount": 0,
    "likedBy": []
  }
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```

#### `PUT /api/pin/update`
_**Authentication required**_
Updates an existing pin.

```javascript
// Expected input
{
    "title": "Another Pin",
    "owner": "594e1e6e2ade2b051f7db3fa",
    "imageURL": "https://media.giphy.com/media/vQYNur4KkSJB6/giphy.gif",
    "_id": "594e394e9845ff06719b93b2",
    "likeCount": 3,
    "likedBy": []
}

// Output (Success)
{
  "success": true,
  "pin": {
    "_id": "594e394e9845ff06719b93b2",
    "updated": "2017-06-24T10:24:17.865Z",
    "created": "2017-06-24T10:05:02.633Z",
    "title": "Another Pin",
    "owner": {
      "_id": "noaein235oubw9tj",
      "displayName": "John Doe"
      "username": "john",
      "profileImageURL": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    },
    "imageURL": "https://media.giphy.com/media/vQYNur4KkSJB6/giphy.gif",
    "likeCount": 3,
    "likedBy": []
  }
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```

#### `DELETE /api/pin/:pinId`
_**Authentication required**_
Deletes a pin with ID `pinId`.

```javascript
// Output (Success)
{
  "success": true,
  "message": "Pin successfully deleted."
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```

