# Use a imagem oficial do NGINX como base
FROM nginx

# Copie os arquivos estáticos do projeto para a pasta de trabalho do contêiner
COPY . /usr/share/nginx/html

# Copie o arquivo de configuração do NGINX para a pasta de configuração
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80
EXPOSE 80

# Inicie o NGINX ao iniciar o contêiner
CMD ["nginx", "-g", "daemon off;"]
