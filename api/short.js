import axios from 'axios'

export const getShortVideos = async (query = {}) => {
    const params = {
        page: query.page || 1,
        title: query.search || '',
        limit: 10
    }
    let url = 'https://videocdn.tv/api/short?api_token=pQVmFd6GtKKYrRaz8Z1qZvmIu5VnhIDX'

    const response = await axios.get(url, {
        params
    })
    return response.data
}

export const getShortVideo = async (kp_id) => {
    const params = {
        kp_id
    }

    let url = 'https://videocdn.tv/api/short?api_token=pQVmFd6GtKKYrRaz8Z1qZvmIu5VnhIDX'

    const response = await axios.get(url, {
        params
    })
    return response.data
}