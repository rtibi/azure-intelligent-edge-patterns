"""
App start
"""
import logging
import sys

from django.apps import AppConfig


logger = logging.getLogger(__name__)



class LocationsConfig(AppConfig):
    """
    locations App Config
    """
    name = 'locations'

    def ready(self):
        """
        Only load to data when runserver
        if ready run in migration will failed
        """
        # FIXME test may use this as well
        if 'runserver' in sys.argv:
            from locations.models import Location
            logger.info("LocationsAppConfig ready while running server")

            create_demo = True
            if create_demo:

                logger.info("Creating Demo Location")
                Location.objects.update_or_create(
                    name="Demo Location",
                    is_demo=True,
                    defaults={
                        'description': "Demo Location",
                    })

            logger.info("CameraAppConfig End while running server")
