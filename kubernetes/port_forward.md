### Port forward: port-forward
Referrer link:
https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/


## Examples with Kibana
# install kibana
helm install kibana elastic/kibana -n logging
# access kibana via port forward
kubectl -n logging port-forward deployment/kibana-kibana 5601
# access on browser
localhost:5601