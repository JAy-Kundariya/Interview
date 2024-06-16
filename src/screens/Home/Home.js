import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {Colors} from '../../constants/Styles';
import axios from 'axios';
import {HomeStyle} from './HomeStyle';
import ListComponent from '../../components/ListComponent';
import SearchBar from '../../components/SearchBar';

const Home = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');

  const fetchData = async pageNumber => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${pageNumber}`)
      .then(async function (response) {
        setData(prevData => [...prevData, ...response.data]);
        setPage(pageNumber);
      })
      .catch(function (error) {
        console.log('Something went wrong');
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
        setLoadMore(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchData(page);
  }, []);

  const loadMoreData = () => {
    if (page != 10) {
      setLoadMore(true);
      fetchData(page + 1);
    }
  };

  const FilterData = React.useMemo(() => {
    const Array = data;

    const filterArrayData = Array.filter(item =>
      item?.title?.includes(value.toLowerCase()),
    );
    return filterArrayData;
  }, [value, data]);

  return (
    <View style={HomeStyle.main}>
      <SearchBar
        value={value}
        onchange={e => setValue(e)}
        close={() => setValue('')}
      />
      {loading ? (
        <View style={HomeStyle.loaderBackground}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
        <FlatList
          data={FilterData}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0}
          contentContainerStyle={HomeStyle.flatlist}
          ListFooterComponent={() =>
            loadMore && (
              <ActivityIndicator size="large" color={Colors.primary} />
            )
          }
          ListEmptyComponent={() => (
            <View style={{padding: 20}}>
              <Text style={{color: 'red'}}>No Data Found</Text>
            </View>
          )}
          renderItem={({item}) => <ListComponent item={item} {...props} />}
        />
      )}
    </View>
  );
};

export default Home;
