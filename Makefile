.PHONY: install start build clean deploy-worker

install:
	npm install

start:
	npm run dev

build:
	npm run build

clean:
	rm -rf node_modules && rm -rf dist

deploy-worker:
	wrangler deploy
