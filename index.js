/**
 * @author Felipe Serna
 * @email damsog38@gmail.com
 * @create date 2022-03-29 22:45:10
 * @modify date 2022-03-29 22:45:39
 * @desc Backend for a platform to create and store notes and lists
 */

/************************************************************************************************
 *                                             Dependencies
*************************************************************************************************/
// Configuration constants
require('dotend').config()

// Basic Express dependencies
const express = require('express');
const fs = require('fs')
const path = require('path')


