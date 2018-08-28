FROM fedora:27

RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
RUN yum install -y nodejs gcc-c++ make cups-libs dbus-glib libXrandr libXcursor libXinerama cairo cairo-gobject pango ImageMagick
RUN npm i -g yarn
RUN rpm -ivh --nodeps http://mirror.centos.org/centos/7/os/x86_64/Packages/atk-2.22.0-3.el7.x86_64.rpm \
    && rpm -ivh --nodeps http://mirror.centos.org/centos/7/os/x86_64/Packages/at-spi2-atk-2.22.0-2.el7.x86_64.rpm \
    && rpm -ivh --nodeps http://mirror.centos.org/centos/7/os/x86_64/Packages/at-spi2-core-2.22.0-1.el7.x86_64.rpm

RUN rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/g/GConf2-3.2.6-7.fc20.x86_64.rpm \
    && rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/l/libXScrnSaver-1.2.2-6.fc20.x86_64.rpm \
    && rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/l/libXcomposite-0.4.4-4.fc20.x86_64.rpm \
    && rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/l/libXdamage-1.1.4-4.fc20.x86_64.rpm   \
    && rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/l/libwayland-client-1.2.0-3.fc20.x86_64.rpm \
    && rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/l/libwayland-cursor-1.2.0-3.fc20.x86_64.rpm \
    && rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/g/gtk3-3.10.4-1.fc20.x86_64.rpm

RUN yum install -y libX11-devel libXtst alsa-lib

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .



EXPOSE 4000

CMD ["npm", "start"]
