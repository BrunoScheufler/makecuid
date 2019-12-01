#!/usr/bin/env node

import cuid from 'cuid';
import minimist from 'minimist';

const { n, count } = minimist<{ n?: string; count?: string }>(process.argv.slice(2));

const amount = parseInt(n || count || '10');

for (let i = 0; i < amount; i++) {
  console.log(cuid());
}
