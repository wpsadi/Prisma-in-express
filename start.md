# To install Prisma
`npm install -D prisma `

<!-- add these also, these help to make it work better -->
`npm i bcryptjs validator jsonwebtoken `

<!-- Invoke prisma cli -->
`npx prisma`

<!-- Create Schema config file -->
`npx prisma init`

go to prisma.schema , select your db and add uri 

create model

<!-- now  install clinet to genrate migrations -->
`npm i @prisma/client`

<!-- generate migrations -->
`npx prisma generate`

create prisma.js and declare prisma variable and then export this prisma and use it