# k8s-101

### commands to run 


```
brew install minikube   # install minikube
brew install kubectl    # install kubectl
minikube start --nodes 2 -p multinode-demo  # create multi node 
minikube status -p multinode-demo  # check status of node
minikube dashboard  -p multinode-demo  # start the dashboard open new terminal wondow
kubectl apply -f hello-react-deploy.yaml  # create deployment and svc inside the hello-react-k8 folder 
kubectl rollout status deployment/hello # check rollout status of deployment
kubectl apply -f hello-svc.yaml # create hello service type of NodePort
kubectl get pods -o wide # get all info about pods 
kubectl get deployment -o wide # get all info about deployments
minikube service list -p multinode-demo # get service list of nodes
kubectl get svc -owide


```