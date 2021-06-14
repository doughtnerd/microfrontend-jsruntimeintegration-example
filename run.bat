docker build -t minimal-nginx ./shell/
docker run -d -e PORT=80 -p 80:80 -v %cd%/shell/index.html:/usr/share/nginx/html/index.html --name my-nginx minimal-nginx
docker run -d -v %cd%/js-bundles:/web -p 8080:8080 --name assets halverneus/static-file-server:latest