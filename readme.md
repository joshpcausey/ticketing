run: 
    kubectl create secret jwt-secret --from-literal=JWT_KEY=asdf
inststall from https://kubernetes.github.io/ingress-nginx/deploy/#docker-desktop 
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.0/deploy/static/provider/cloud/deploy.yaml

