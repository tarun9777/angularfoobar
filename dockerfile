FROM node:20.10 as builder
WORKDIR /usr/local/app
COPY ./ /usr/local/app
RUN npm install
RUN npm run build

FROM nginx:latest 
COPY --from=builder /usr/local/app/dist/ask/browser /usr/share/nginx/html

EXPOSE 80
