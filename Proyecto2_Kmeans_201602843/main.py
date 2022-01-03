import matplotlib.pyplot as plt
import numpy as np
from sklearn.cluster import KMeans

X = np.array([[8,2],[9,7],[2,12], [9,1], [10,7] , [3,14] ,[8,1] ,[1,13]])

Kmeans = KMeans (n_clusters=3)
Kmeans.fit(X)

print(Kmeans.cluster_centers_)
plt.scatter(X[:,0],X[:,1] , c =Kmeans.labels_ , cmap='rainbow')
# mostrar grafica la grafica
plt.show()