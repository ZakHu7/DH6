# from sklearn import tree
# features = ([140,0],[130,0],[150,1], [170,1])#smooth,smooth,bumpy,bumpy
# labels = [0,0,1,1]#apple, apple, orange, orange
# clf = tree.DecisionTreeClassifier()
# clf = clf.fit(features, labels)# fit = find parttern in data
# print(clf.predict([[150,0]]))

import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
###### helper functions. Use them when needed #######
def get_id_from_index(index, df):
	return df[df.Index == index]["ID"].values[0]

def get_car_from_index(index, df):
	# res = []
	# res.append(df[df.Index == index]["ID"].values[0])
	return df[df.Index == index]["ID"].values[0] + ' ' + str(df[df.Index == index]['Release'].values[0]) + ' ' + df[df.Index == index]['Brand'].values[0] + ' ' + df[df.Index == index]['Model'].values[0]+ ' ' + '$' + str(df[df.Index == index]['Price'].values[0]) + ' ' + str(df[df.Index == index]['Range'].values[0]) + 'km'
	# return res
def get_index_from_id(ID, df):
	return df[df.ID == ID]["Index"].values[0]
##################################################

def getCars(car_user_likes):
	##Step 1: Read CSV File
	df = pd.read_csv(r'C:\Users\zakhu\Documents\CS Projects\DH6\python\EV_Dataset.csv')
	#print df.columns
	##Step 2: Select Features

	features = ['Brand','Model','Range','Price']
	##Step 3: Create a column in DF which combines all selected features
	for feature in features:
		df[feature] = df[feature].fillna('')

	def combine_features(row):
		try:
			return row['Brand'] +' '+row['Model']+' '+str(row['Range'])+' '+str(row['Price'])
		except:
			print ("Error:", row)	

	df["combined_features"] = df.apply(combine_features,axis=1)


	#print ("Combined Features:", df["combined_features"].head())

	##Step 4: Create count matrix from this new combined column
	cv = CountVectorizer()

	count_matrix = cv.fit_transform(df["combined_features"])

	##Step 5: Compute the Cosine Similarity based on the count_matrix
	cosine_sim = cosine_similarity(count_matrix) 
	# car_user_likes = "T2"#user input

	## Step 6: Get index of this car from its title
	car_index = get_index_from_id(car_user_likes, df)

	similar_cars =  list(enumerate(cosine_sim[car_index]))

	## Step 7: Get a list of similar cars in descending order of similarity score
	sorted_similar_cars = sorted(similar_cars,key=lambda x:x[1],reverse=True)

	res = []

	## Step 8: Print titles of first 3 cars
	i=0
	for element in sorted_similar_cars:
			# print(get_car_from_index(element[0], df))
			res.append(get_car_from_index(element[0], df))
			i=i+1
			if i>3:
				break

	return res


