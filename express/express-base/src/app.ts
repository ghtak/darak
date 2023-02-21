import express, { Request, Response, NextFunction } from 'express'
import config from '../config'

const app = express()

console.log(config.PORT);

