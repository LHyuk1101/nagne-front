# 로컬에서 빌드 후 nginx로 서비스
FROM nginx:alpine

# 로컬 빌드 결과물을 Docker 이미지에 복사
COPY ./dist /usr/share/nginx/html

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]