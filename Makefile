.PHONY: dev

PORT ?= 8765

dev:
	python3 -m http.server $(PORT) --bind 127.0.0.1
