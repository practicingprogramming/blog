#!/bin/sh

rm -rf build/
mkdir build/
cp -R public/* build/
cp -R js/* build/
cp -R css/* build/

aws s3 sync build s3://practicingprogramming.com/

