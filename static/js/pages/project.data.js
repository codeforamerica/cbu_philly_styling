/*--------------------------------------------------------------------
  Copyright (c) 2011 Local Projects. All rights reserved.
  Licensed under the Affero GNU GPL v3, see LICENSE for more details.
 --------------------------------------------------------------------*/

var tc = tc || {};
tc.gam = tc.gam || {};
tc.gam.project_data = {
    /**
     * Function: getNeedDetails
     * Fetch the detail for a given need_id
     */
    getNeedDetails: function(need_id, success, error) {
        tc.jQ.ajax({
            url:'/rest/v1/needs/' + need_id + '/',
            dataType:'json',
            success:function(data, status, xhr) {
                if (success) {
                    success(data, status, xhr);
                }
            },
            error:function(xhr, status, errorThrown){
                if (error) {
                    error(xhr, status, errorThrown);
                }
            }
        });
    },
    _getNeedsByQuery: function(query_data, success, error) {
        tc.jQ.ajax({
            url:'/rest/v1/needs/',
            dataType:'json',
            data:query_data,
            success:function(data, status, xhr) {
                if (success) {
                    success(data, status, xhr);
                }
            },
            error:function(xhr, status, errorThrown){
                if (error) {
                    error(xhr, status, errorThrown);
                }
            }
        });
    },
    getNeeds: function(success, error) {
        this._getNeedsByQuery({}, success, error);
    },
    getProjectNeeds: function(project_id, success, error) {
        this._getNeedsByQuery({project_id:project_id}, success, error);
    },
    getEventNeeds: function(event_id, success, error) {
        this._getNeedsByQuery({event_id:event_id}, success, error);
    },
    createNeed: function(need_data, success, error) {
      tc.jQ.ajax({
        type:'POST',
        url:'/rest/v1/needs/',
        data:need_data,
        dataType:'text',
        success:function(data, status, xhr) {
          if (success) {
            success(data, status, xhr);
          }
        },
        error:function(xhr, status, errorThrown){
          if (error) {
            error(xhr, status, errorThrown);
          }
        }
      });
    },
    updateNeed: function(need_id, need_data, success, error) {
      tc.jQ.ajax({
        type:'PUT',
        url:'/rest/v1/needs/' + need_id + '/',
        data:need_data,
        dataType:'text',
        success:function(data, status, xhr) {
          if (success) {
            success(data, status, xhr);
          }
        },
        error:function(xhr, status, errorThrown){
          if (error) {
            error(xhr, status, errorThrown);
          }
        }
      });
    },
    deleteNeed: function(need_id, success, error) {
        tc.jQ.ajax({
            type:'DELETE',
            url:'/rest/v1/needs/' + need_id + '/',
            success:function(data,ts,xhr){
                if (success) {
                    success(data, status, xhr);
                }
            },
            error:function(xhr, status, errorThrown) {
                if (error) {
                    error(xhr, status, errorThrown);
                }
            }
        });
    },
    createEvent: function(data, success, error) {
      tc.jQ.ajax({
        type:'POST',
        url:'/rest/v1/events/',
        data:data,
        dataType:'text',
        success:function(data, status, xhr) {
          if (success) {
            success(data, status, xhr);
          }
        },
        error:function(xhr, status, errorThrown){
          if (error) {
            error(xhr, status, errorThrown);
          }
        }
      });
    },
    updateEvent: function(id, data, success, error) {
      tc.jQ.ajax({
        type:'PUT',
        url:'/rest/v1/events/' + id + '/',
        data:data,
        dataType:'text',
        success:function(data, status, xhr) {
          if (success) {
            success(data, status, xhr);
          }
        },
        error:function(xhr, status, errorThrown){
          if (error) {
            error(xhr, status, errorThrown);
          }
        }
      });
    },
    deleteEvent: function(event_id, success, error) {
        tc.jQ.ajax({
            type:'DELETE',
            url:'/rest/v1/events/' + event_id + '/',
            success:function(data,ts,xhr){
                if (success) {
                    success(data, status, xhr);
                }
            },
            error:function(xhr, status, errorThrown) {
                if (error) {
                    error(xhr, status, errorThrown);
                }
            }
        });
    },
    getEventDetails: function(id, success, error) {
        tc.jQ.ajax({
            url:'/rest/v1/events/' + id + '/',
            dataType:'json',
            success:function(data, status, xhr) {
                if (success) {
                    success(data, status, xhr);
                }
            },
            error:function(xhr, status, errorThrown){
                if (error) {
                    error(xhr, status, errorThrown);
                }
            }
        });
    },
    _getEventsByQuery: function(query_data, success, error) {
        tc.jQ.ajax({
            url:'/rest/v1/events/',
            dataType:'json',
            data:query_data,
            success:function(data, status, xhr) {
                if (success) {
                    success(data, status, xhr);
                }
            },
            error:function(xhr, status, errorThrown){
                if (error) {
                    error(xhr, status, errorThrown);
                }
            }
        });
    },
    getEvents: function(success, error) {
        return this._getEventsByQuery({}, success, error);
    },
    getProjectEvents: function(project_id, success, error) {
        this._getEventsByQuery({project_id:project_id}, success, error);
    }
};
