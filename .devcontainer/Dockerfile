FROM mcr.microsoft.com/devcontainers/typescript-node:0-18

# Install dependencies
RUN apt-get update && apt-get --no-install-recommends install -y \
  gdal-bin \ 
  libgdal-dev \ 
  g++ \
  # Cypress dependencies: https://docs.cypress.io/guides/getting-started/installing-cypress#UbuntuDebian
  libgtk2.0-0 \ 
  libgtk-3-0 \
  libgbm-dev \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  # clean up
  && rm -rf /var/lib/apt/lists/* \
  && apt-get clean

# Use nvm to install Node.js version v18.20.0 and fix permissions
RUN /bin/bash -c "source $NVM_DIR/nvm.sh \
  && nvm install v18.20.0 \
  && nvm use v18.20.0 \
  && nvm alias default v18.20.0 \
  && chown -R node:node /usr/local/share/nvm"
