FROM nginx:alpine
RUN sed -i 's/listen\s*80;/listen 8090;/g' /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html
EXPOSE 8090
CMD ["nginx", "-g", "daemon off;"]