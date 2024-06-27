const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_BASE_URL = '/api/ad';
const API_CHANNEL_URL = '/api/channel';
const API_CAMPAIGN_URL = API_BASE_URL + '/campaign';
const API_GROUP_URL = API_BASE_URL + '/group';

export const createAdvertisement = async (adData: any) => {
 const data = JSON.stringify(adData);
  const response = await fetch(`${apiUrl}${API_BASE_URL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(adData),
  });
  return response.json();
};

export const updateAdvertisement = async (adData: any) => {
  const response = await fetch(`${apiUrl}${API_BASE_URL}/update`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(adData),
  });
  return response.json();
};

export const deleteAd = async (ad_id: string) => {
  const response = await fetch(`${apiUrl}${API_BASE_URL}/delete?id=${ad_id}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const publishAd = async (ad_id: string) => {
  const response = await fetch(`${apiUrl}${API_BASE_URL}/publish?ad_id=${ad_id}`, {
    method: 'POST',
  });
  return response.json();
};

export const unpublishAd = async (ad_id: string) => {
  const response = await fetch(`${apiUrl}${API_BASE_URL}/unpublish?ad_id=${ad_id}`, {
    method: 'POST',
  });
  return response.json();
};


export const fetchAd = async (id: string) => {
  const response = await fetch(`${apiUrl}${API_BASE_URL}/${id}`);
  return response.json();
};

export const fetchAds = async () => {
  const response = await fetch(`${apiUrl}${API_BASE_URL}/list`);
  return response.json();
};

export const fetchChannels = async () => {
  const response = await fetch(`${apiUrl}${API_CHANNEL_URL}/list`);
  return response.json();
};

export const fetchImage = async (imageId:string) => {
  const response = await fetch(`${apiUrl}${API_BASE_URL}/media/${imageId}`);
  return response.json();
};

export const createCampaign = async (campaignData: any) => {
  const data = JSON.stringify(campaignData);
   const response = await fetch(`${apiUrl}${API_BASE_URL}/campaign/create`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(campaignData),
   });
   return response.json();
 };

 export const updateCampaign = async (campaignData: any) => {
  const response = await fetch(`${apiUrl}${API_CAMPAIGN_URL}/campaign/update`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(campaignData),
  });
  return response.json();
};

export const deleteCampaign = async (id: string) => {
  const response = await fetch(`${apiUrl}${API_CAMPAIGN_URL}/delete?id=${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const fetchCampaign = async (id: string) => {
  const response = await fetch(`${apiUrl}${API_CAMPAIGN_URL}/${id}`);
  return response.json();
};

export const fetchCampaignList = async () => {
  const response = await fetch(`${apiUrl}${API_CAMPAIGN_URL}/list`);
  return response.json();
};

export const createGroup = async (groupData: any) => {
  const data = JSON.stringify(groupData);
   const response = await fetch(`${apiUrl}${API_GROUP_URL}/create`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(groupData),
   });
   return response.json();
 };

 export const updateGroup = async (groupData: any) => {
  const response = await fetch(`${apiUrl}${API_GROUP_URL}/update`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(groupData),
  });
  return response.json();
};

export const deleteGroup = async (id: string) => {
  const response = await fetch(`${apiUrl}${API_GROUP_URL}/delete?id=${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const fetchGroup = async (id: string) => {
  const response = await fetch(`${apiUrl}${API_GROUP_URL}/${id}`);
  return response.json();
};

export const fetchGroupList = async (campaignId: string) => {
  const response = await fetch(`${apiUrl}${API_GROUP_URL}/list?campaignId=${campaignId}`);
  return response.json();
};