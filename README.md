# ng-book

Code and examples from ng-book.pdf


## Initial Setup

clone this repo:
```
git clone git@github.com:rorysterley/ng-book.git
```

Install dependancies:
```
npm install
```

Create a local data-base folder:
```
mkdir db
```

Start MongoDB:  (if you don't have MongoDB installed see their [docs](http://docs.mongodb.org/manual/))
```
mongod --dbpath=./db --smallfiles
```

Start the server:
```
node server
```

## License
[MIT](LICENSE)
