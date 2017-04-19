FROM node:latest
MAINTAINER linmadan <772181827@qq.com>
COPY ./package.json /home/gridvo-mqtt-dashboard/
WORKDIR /home/gridvo-mqtt-dashboard
RUN ["npm","config","set","registry","http://registry.npm.taobao.org"]
RUN ["npm","install","--save","express@4.15.2"]
RUN ["npm","install","--save","underscore@1.8.3"]
RUN ["npm","install","--save","gridvo-common-js@0.0.23"]
COPY ./app.js app.js
COPY ./lib lib
COPY ./extjs/build/production/MqttDashboard extjs/build/production/MqttDashboard
ENTRYPOINT ["node"]
CMD ["app.js"]