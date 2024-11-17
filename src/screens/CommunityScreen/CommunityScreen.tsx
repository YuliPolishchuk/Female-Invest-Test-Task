import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HapticFeedback from "react-native-haptic-feedback";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Post } from "../../model/course";
import colors from "../../constants/colors";
import { styles } from "./CommunityScreen.styles";
import { generateMockPosts } from "../../mock/post";

dayjs.extend(relativeTime);

const POSTS_PER_PAGE = 10;
const MAX_PAGES = 5;

const CommunityScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    setTimeout(() => {
      const newPosts = generateMockPosts(page, POSTS_PER_PAGE);

      setPosts((prevPosts) =>
        [...prevPosts, ...newPosts].sort((a, b) =>
          dayjs(b.createdAt).diff(dayjs(a.createdAt))
        )
      );

      setPage((prevPage) => prevPage + 1);
      setHasMore(page < MAX_PAGES);
      setLoading(false);
    }, 1000);
  }, [loading, hasMore, page]);

  const handleToggleLike = useCallback((postId: string) => {
    HapticFeedback.trigger("impactMedium", {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, isLiked: !post.isLiked } : post
      )
    );
  }, []);

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.post}>
      <View style={styles.wrap}>
        <View style={styles.user}>
          <Text>{item.username.charAt(0).toUpperCase()}</Text>
        </View>
        <View>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.time}>{dayjs(item.createdAt).fromNow()}</Text>
        </View>
      </View>
      <Text style={styles.content}>{item.content}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleToggleLike(item.id)}>
          <FontAwesome
            name={item.isLiked ? "heart" : "heart-o"}
            size={24}
            color={item.isLiked ? colors.accentPrimaryPink : "gray"}
          />
        </TouchableOpacity>
        <Text style={styles.likes}>
          {item.likes + (item.isLiked ? 1 : 0)} Likes
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
        onEndReached={fetchPosts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? (
            <View style={styles.loading}>
              <ActivityIndicator
                size="small"
                color={colors.accentPrimaryPink}
              />
            </View>
          ) : (
            <View />
          )
        }
      />
    </SafeAreaView>
  );
};

export default CommunityScreen;
