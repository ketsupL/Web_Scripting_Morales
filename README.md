CS15 Laboratory 2

Requires node.js, php, and composer

Setup:

Install PHP dependencies: composer install

Install JS dependencies: npm install

Copy environment file: cp .env.example .env

Generate app key: php artisan key:generate

Run migrations: php artisan migrate --seed

Start servers: composer run dev
