#!/bin/bash
kubectl -n gridvo get svc | grep -q gridvo-mqtt-dashboard
if [ "$?" == "1" ];then
	kubectl create -f gridvo_mqtt_dashboard-service.yaml --record
	kubectl -n gridvo get svc | grep -q gridvo-mqtt-dashboard
	if [ "$?" == "0" ];then
		echo "gridvo_mqtt_dashboard-service install success!"
	else
		echo "gridvo_mqtt_dashboard-service install fail!"
	fi
else
	echo "gridvo_mqtt_dashboard-service is exist!"
fi
kubectl -n gridvo get pods | grep -q gridvo-mqtt-dashboard
if [ "$?" == "1" ];then
	kubectl create -f gridvo_mqtt_dashboard-deployment.yaml --record
	kubectl -n gridvo get pods | grep -q gridvo-mqtt-dashboard
	if [ "$?" == "0" ];then
		echo "gridvo_mqtt_dashboard-deployment install success!"
	else
		echo "gridvo_mqtt_dashboard-deployment install fail!"
	fi
else
	kubectl delete -f gridvo_mqtt_dashboard-deployment.yaml
	kubectl -n gridvo get pods | grep -q gridvo-mqtt-dashboard
	while [ "$?" == "0" ]
	do
	kubectl -n gridvo get pods | grep -q gridvo-mqtt-dashboard
	done
	kubectl create -f gridvo_mqtt_dashboard-deployment.yaml --record
	kubectl -n gridvo get pods | grep -q gridvo-mqtt-dashboard
	if [ "$?" == "0" ];then
		echo "gridvo_mqtt_dashboard-deployment update success!"
	else
		echo "gridvo_mqtt_dashboard-deployment update fail!"
	fi
fi
